package com.mySQLTesting.mySQLTesting;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
public class MySqlTestingApplication {

	public static void main(String[] args) {
		SpringApplication.run(MySqlTestingApplication.class, args);
	}

}
