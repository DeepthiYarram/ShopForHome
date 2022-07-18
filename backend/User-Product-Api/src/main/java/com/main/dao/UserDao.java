package com.main.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.main.entity.User;

@Repository
public interface UserDao extends JpaRepository<User, String> {

//	@Query("DELETE FROM  USER_ROLE WHERE user_id =  userName  and role_id = 'User'")
//	public void deleteUserRole(@Param("userName") String userName);
}
