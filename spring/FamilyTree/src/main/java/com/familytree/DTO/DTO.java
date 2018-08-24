package com.familytree.DTO;

import java.lang.reflect.Field;
import java.util.ArrayList;

import org.springframework.stereotype.Component;

import com.familytree.beans.Family;
import com.familytree.beans.Login;
import com.familytree.beans.User;

import antlr.collections.List;
@Component
public class DTO {
	
	private Boolean status;
	private String error;
	private User user;
	private Login login;
	private Family family;
	
	public DTO() {
		super();
	}
	public DTO(Boolean status, String error, User user, Login login, Family family) {
		super();
		this.status = status;
		this.error = error;
		this.user = user;
		this.login = login;
		this.family = family;
	}
	public Boolean getStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	public String getError() {
		return error;
	}
	public void setError(String error) {
		this.error = error;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Login getLogin() {
		return login;
	}
	public void setLogin(Login login) {
		this.login = login;
	}
	public Family getFamily() {
		return family;
	}
	public void setFamily(Family family) {
		this.family = family;
	}
	public void nullifyAllFields() throws IllegalArgumentException, IllegalAccessException {
	    for ( Field f : this.getClass().getDeclaredFields()) {
	        f.setAccessible(true);
	        if(f.getType().equals(List.class))
	        	f.set(this, new ArrayList<User>());
	        else if (f.getType().equals(String.class)) {
	        	f.set(this, "");
	        }else
	        	f.set(this, null);
	    }

	}
	@Override
	public String toString() {
		return "DTO [status=" + status + ", error=" + error + ", user=" + user + ", login=" + login + ", family="
				+ family + "]";
	}
	
}
