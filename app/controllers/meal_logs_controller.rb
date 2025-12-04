class MealLogsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_meal_log, only: [ :update, :destroy ]

  # GET /meal-logs
  def index
    date = params[:date] ? Date.parse(params[:date]) : Date.current
    meal_logs = current_user.meal_logs
                            .includes(:food)
                            .where(logged_at: date.all_day)
                            .order(logged_at: :asc)

    render inertia: "MealLogs/Index", props: {
      date: date,
      meal_logs: meal_logs.as_json(
        include: { food: {} },
        methods: [ :intake_kcal, :intake_protein, :intake_fat, :intake_carbs ]
        )
    }
  end

  # POST /meal-logs
  def create
    meal_log = current_user.meal_logs.new(meal_log_params)
    meal_log.logged_at ||= Time.current

    if meal_log.save
      redirect_to meal_logs_path, notice: "食事ログを追加しました。"
    else
      redirect_to meal_logs_path, inertia: { errors: meal_log.errors }
    end
  end

  # PATCH/PUT /meal-logs/:id
  def update
    if @meal_log.update(meal_log_params)
      redirect_to meal_logs_path, notice: "食事ログを更新しました。"
    else
      redirect_to meal_logs_path, inertia: { errors: @meal_log.errors }
    end
  end

  # DELETE /meal-logs/:id
  def destroy
    @meal_log.destroy
    redirect_to meal_logs_path, notice: "食事ログを削除しました。"
  end

  private

  def set_meal_log
    @meal_log = current_user.meal_logs.find(params[:id])
  end

  def meal_log_params
    params.require(:meal_log).permit(
      :food_id,
      :logged_at,
      :intake_rate,
    )
  end
end
