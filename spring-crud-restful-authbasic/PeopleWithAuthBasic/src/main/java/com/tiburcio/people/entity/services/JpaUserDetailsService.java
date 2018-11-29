package com.tiburcio.people.entity.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tiburcio.people.entity.dao.IAppUserDao;
import com.tiburcio.people.entity.models.Role;
import com.tiburcio.people.entity.models.AppUser;

@Service("JpaUserDetailsService")
public class JpaUserDetailsService implements UserDetailsService {

	@Autowired
	IAppUserDao userDao;
	
	@Override
	@Transactional(readOnly=true)
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		AppUser appUser = userDao.findUserByUsername(username);
		
		if(appUser == null) {
			throw new UsernameNotFoundException("User " + username + " doesn't exist");
		}
		
		List<GrantedAuthority> authorities = new ArrayList<>();
		
		for(Role role: appUser.getRoles()) {
			authorities.add(new SimpleGrantedAuthority(role.getRole()));
		}
		
		if(authorities.isEmpty()) {
			throw new UsernameNotFoundException("User " + username + " doesn't have any assigned role");
		}
		
		return new User(appUser.getUsername(), appUser.getPassword(), true, true, true, true, authorities);
	}

}
