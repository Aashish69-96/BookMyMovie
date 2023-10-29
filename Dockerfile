FROM ubuntu:latest

LABEL maintainer="Aashish Adhikari <aashishadhikari693@gmail.com>"

RUN  apt-get update && apt-get install -y g++ 

WORKDIR /app

COPY . .

RUN g++ main.cpp

CMD ["./a.out"]

