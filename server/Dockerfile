FROM centos:7 AS sbt
ENV SBT_VERSION 0.13.15

RUN yum install -y java-11-openjdk && \
    yum install -y epel-release && \
    yum update -y && yum install -y wget && \
    wget http://dl.bintray.com/sbt/rpm/sbt-$SBT_VERSION.rpm && \
    yum install -y sbt-$SBT_VERSION.rpm && \
    yum install unzip -y

FROM sbt AS sbt-builder

COPY . /root/server

WORKDIR /root/server

RUN sbt dist



FROM sbt AS sbt-runner

COPY --from=sbt-builder /root/server/target/universal/play-java-hello-world-web-1.0-SNAPSHOT.zip /tmp
RUN unzip /tmp/play-java-hello-world-web-1.0-SNAPSHOT.zip -d /root/ && mv /root/play-java-hello-world-web-1.0-SNAPSHOT /root/playserver

WORKDIR /root/playserver


ENTRYPOINT ["java","-Dplay.http.secret.key=QCY?tAnfk?aZ?iwrNwnxIlR6CTf:G3gf:90Latabg@5241AB`R5W:1uDFN];Ik@n" ,"-DCONF_PATH=conf","-Dplay.server.http.port=9000","-cp","lib/*:conf","play.core.server.ProdServerStart"]

