FROM centos:7
ENV SBT_VERSION 0.13.15

RUN yum install -y java-11-openjdk && \
    yum install -y epel-release && \
    yum update -y && yum install -y wget && \
    wget http://dl.bintray.com/sbt/rpm/sbt-$SBT_VERSION.rpm && \
    yum install -y sbt-$SBT_VERSION.rpm

WORKDIR /root
EXPOSE 8080

RUN sbt compile
CMD sbt run