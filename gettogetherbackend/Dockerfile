FROM maven:3.8.2-jdk-11

WORKDIR /gettogetherbackend
COPY . .
RUN mvn clean install -DskipTests
EXPOSE 8080

CMD mvn spring-boot:run