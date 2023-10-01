FROM python:3.9.6-slim

WORKDIR /src

COPY ./ /

# install system dependencies
RUN apt-get update && \
    apt-get install -y \
        build-essential \
        python3-dev \
        python3-setuptools \
        libpq-dev\
        make \
        gcc

# install libraries
RUN pip install --upgrade pip
COPY ./requirements.txt /requirements.txt
RUN python3 -m pip install -r /requirements.txt

# insert init data
# COPY ./src/lib/database/drop_table.sql /docker-entrypoint-initdb.d/
# RUN chmod 755 /docker-entrypoint-initdb.d/drop_table.sql
# COPY ./src/lib/database/insert_init_data.sql /docker-entrypoint-initdb.d/
# RUN chmod 755 /docker-entrypoint-initdb.d/insert_init_data.sql

RUN apt-get remove -y --purge make gcc build-essential && \
    apt-get autoremove -y && \
    rm -rf /var/lib/apt/lists/*

# Launch FastAPI command
CMD ["uvicorn", "main:app","--reload", "--host", "0.0.0.0", "--port", "8000"]
# CMD ['bin/bash']

EXPOSE 8000