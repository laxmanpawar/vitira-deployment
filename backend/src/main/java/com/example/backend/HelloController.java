package com.example.backend;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String hello(@AuthenticationPrincipal Jwt jwt) {
        if (jwt == null) {
            return "Hello World (unauthenticated)";
        }
        String username = jwt.getClaimAsString("preferred_username");
        return "Hello, " + username + "!";
    }

    @GetMapping("/api/userinfo")
    public Object userInfo(@AuthenticationPrincipal Jwt jwt) {
        return jwt != null ? jwt.getClaims() : null;
    }
} 