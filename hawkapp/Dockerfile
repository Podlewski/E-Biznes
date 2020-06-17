FROM zenika/alpine-maven:3-jdk8 AS build
#FROM maven:3.6-openjdk-11-slim AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

FROM openjdk:8-jre-alpine
#FROM adoptopenjdk/openjdk11:alpine-jre
COPY --from=build /home/app/target/hawkapp-0.0.1-SNAPSHOT.jar /home/app/release/hawkapp.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/home/app/release/hawkapp.jar"]
