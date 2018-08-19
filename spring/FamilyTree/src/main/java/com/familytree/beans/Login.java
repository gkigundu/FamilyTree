package com.familytree.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Size;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(schema="familytree",
		name="LOGIN",
		uniqueConstraints = {
				@UniqueConstraint(columnNames={"USERNAME"}),
				@UniqueConstraint(columnNames={"EMAIL"}),
				})
public class Login  extends GenericBean  {
	@OneToOne(fetch = FetchType.LAZY)
    @MapsId("USER_ID")
    @JoinColumn(name = "USER_ID")
	private User user;
//	@ManyToOne(fetch = FetchType.LAZY)
//    @MapsId("FAMILY_ID")
//    @JoinColumn(name = "FAMILY_ID")
//	private Family family;
	@Id
	private Integer id;
	@Size(max = 15)
	@Column(name="USERNAME")
	private String username;
	@Size(max = 30)
	@Column(name="EMAIL")
	private String email;
	@Size(max = 30)
	@Column(name="PASSWORD")
	private String password;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
//	public Family getFamily() {
//		return family;
//	}
//	public void setFamily(Family family) {
//		this.family = family;
//	}
	
	@Override
	public String toString() {
		return "Login [Id=" + id + ", username=" + username + ", email=" + email + ", password=" + password + "]";
	}
	public void copyAll(Login login) {
		setId(login.getId());
		setUsername( login.getUsername());
		setEmail(login.getEmail());
	}
	@Override
	public void update(GenericBean bean) {
		Login login = (Login) bean;
		this.setUser(login.getUser());
		this.setUsername(login.getUsername());
		this.setPassword(login.getPassword());
		this.setEmail(login.getEmail());
		//this.setFamily(login.getFamily());
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
