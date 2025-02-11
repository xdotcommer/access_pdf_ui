class SessionsController < AuthenticatedController
  allow_unauthenticated_access only: %i[new create]
  rate_limit to: 10, within: 3.minutes, only: :create, with: -> { redirect_to new_session_url, alert: "Try again later." }

  def new
  end

  def create
    if (user = User.authenticate_by(params.permit(:email_address, :password)))
      start_new_session_for user
      redirect_to after_authentication_url, notice: "Welcome back!"
    else
      render :new, status: :unprocessable_entity, alert: "Try another email address or password."
    end
  end

  def destroy
    terminate_session
    redirect_to login_path, notice: "You have been signed out."
  end
end
