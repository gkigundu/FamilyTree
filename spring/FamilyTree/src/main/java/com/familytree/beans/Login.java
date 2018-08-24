package com.familytree.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Size;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Component
@Entity
@Table(schema="familytree",
		name="LOGIN",
		uniqueConstraints = {
				@UniqueConstraint(columnNames={"USERNAME"}),
				@UniqueConstraint(columnNames={"EMAIL"}),
				})
public class Login  extends GenericBean  {


	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private Integer id;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	private User user;

	@Size(max = 15)
	@Column(name="USERNAME")
	private String username;
	
	@Size(max = 30)
	@Column(name="EMAIL")
	private String email;
	
	@Size(max = 30)
	@Column(name="PASSWORD")
	private String password;
	
	public Login() {
		super();
	}
	public Login(Integer id, User user, @Size(max = 15) String username, @Size(max = 30) String email,
			@Size(max = 30) String password) {
		super(id);
		this.id = id;
		this.user = user;
		this.username = username;
		this.email = email;
		this.password = password;
	}
	public void setId(Integer id) {
		this.id=id;
		super.setId(id);
	}	
	public Integer getId() {
		return this.id;
	}

	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return this.email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return this.password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public User getUser() {
		return this.user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	@Override
	public String toString() {
		return "Login [Id=" + (id==null?"null":id)
				+ ", user_id=" + (user!=null?user.getId()!=null?user.getId():"null":"null") 
				+ ", username=" + (username ==null?"null":username)
				+ ", email=" + (email==null?"null":email)
				+ ", password=" + (password==null?"null":password) 
				+ "]";
	}
	public void copyAll(Login login) {
		this.setId(login.getId());
		this.setUsername( login.getUsername());
		this.setEmail(login.getEmail());
		this.setPassword(login.getPassword());
		this.setUser(login.getUser());
	}
	@Override
	public void update(GenericBean bean) {
		Login login = (Login) bean;
		this.setUser(login.getUser());
		this.setUsername(login.getUsername());
		this.setPassword(login.getPassword());
		this.setEmail(login.getEmail());
	}
	public boolean hasRequired() {
		if((this.username!=null && !this.username.isEmpty())
			|| (this.email!=null && !this.email.isEmpty())
			|| (this.password!=null && !this.password.isEmpty())
			) {
			return true;
		}
		return false;
	}
	
}
