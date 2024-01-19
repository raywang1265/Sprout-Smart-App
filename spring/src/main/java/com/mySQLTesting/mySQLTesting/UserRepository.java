package com.mySQLTesting.mySQLTesting;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.mySQLTesting.mySQLTesting.User;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

}
