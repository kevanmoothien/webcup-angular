class ChecklistsController < ApplicationController
  protect_from_forgery except: :service_worker

  def show
    @checklist = Checklist.find_by({job_id: params[:job_id]})
    render json: @checklist
  end

  def service_worker; end
  
  def manifest; end

end
