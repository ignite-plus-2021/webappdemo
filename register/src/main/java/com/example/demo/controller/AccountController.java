package com.example.demo.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AccountController {
    @RequestMapping(value="/",method= RequestMethod.GET)
    public ModelAndView showHome(){
        ModelAndView nav=new ModelAndView("home");
        return nav;
    }
    //@GetMapping("/register")
   // public String register(){
      //  return "register";
   // }
}
