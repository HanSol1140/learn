package com.baeksoo.shop;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class ShopApplication {

	public static <T> void functionTest(T a) {
		System.out.println(a);
	}

	public static void main(String[] args) {
		SpringApplication.run(ShopApplication.class, args);
		System.out.println("Hello and welcome!");


		var Friend1 = new Friend("song");
		functionTest(Friend1.name);
		functionTest(Friend1.age);
		var Friend2 = new Friend("song2", 31);
		functionTest(Friend2.name);
		functionTest(Friend2.age);


	}


}
