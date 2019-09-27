class SessionsController < ApplicationController
    def new 
    end

    def create 
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user] = user.id 
            redirect_to musicians_path
        else
            flash[:message] = "Michael Jordan is not a musician...maybe"
            redirect_to login_path
        end
        
        # session[:user] = user.id
    end

    def logout
        session[:user] = nil
        redirect_to login_path
    end 

end
