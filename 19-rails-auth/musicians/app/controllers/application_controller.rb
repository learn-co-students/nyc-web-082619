class ApplicationController < ActionController::Base

    def user 
        if session[:user]
            user = User.find(session[:user])
        end
    end


    def valid? 
       redirect_to login_path unless user  
    end
end

