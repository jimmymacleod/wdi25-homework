class RunsController < ApplicationController

  def home
  end

  def new
    @run = Run.new
  end

  def create
    Run.create run_params
    redirect_to runs_path
  end

  def index
    @runs = Run.all
  end

  def show
    @run = Run.find params[:id]
  end

  def edit
    @run = Run.find params[:id]
  end

  def update
    run = Run.find params[:id]
    run.update run_params
    redirect_to run
  end

  def destroy
    Run.destroy params[:id]
    redirect_to runs_path
  end

  private
  def run_params
    params.require(:run).permit(:name, :distance, :date, :country, :city, :image)
  end

end
