class RunnersController < ApplicationController

  def home
  end

  def new
    @runner = Runner.new
  end

  def create
    Runner.create runner_params

    redirect_to runners_path
  end

  def index
    @runners = Runner.all
  end

  def show
    @runner = Runner.find params[:id]
  end

  def edit
    @runner = Runner.find params[:id]
  end

  def update
    runner = Runner.find params[:id]
    runner.update runner_params
    redirect_to runner
  end

  def destroy
    Runner.destroy params[:id]
    redirect_to runners_path
  end

  private
  def runner_params
    params.require(:runner).permit(:name, :age, :nationality, :gender, :image, :runner_id)
  end

end
