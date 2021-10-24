FROM openjdk:8

WORKDIR /usrapp/bin

ENV PORT 6000

COPY /target/classes /usrapp/bin/classes
COPY /target/dependency /usrapp/bin/dependency

CMD ["java","-cp","./classes:./dependency/*","edu.aygo.logservice.Api"]
#CMD ["java", "-jar", "target/*-jar-with-dependencies.jar"]
