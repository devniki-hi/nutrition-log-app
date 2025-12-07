class FoodsController < InertiaController
  before_action :authenticate_user!
  before_action :set_food, only: %i[show edit update destroy ]
  inertia_share do {
    unit_types: Food.unit_types.keys,
    sources: Food.sources.keys
  } end

  # GET /foods
  def index
    @foods = Food.all
    render inertia: "Foods/Index", props: {
      foods: @foods.map do |food|
        serialize_food(food)
      end
    }
  end

  # GET /foods/1
  def show
    render inertia: "Foods/Show", props:  {
      food: serialize_food(@food)
    }
  end

  # GET /foods/new
  def new
    @food = Food.new
    render inertia: "Foods/New", props: {
      food: @food,
      unit_types: Food.unit_types.keys,
      sources: Food.sources.keys
    }
  end

  # GET /foods/1/edit
  def edit
    render inertia: "Foods/Edit", props:  {
      food: serialize_food(@food)
    }
  end

  # POST /foods
  def create
    @food = Food.new(food_params)

    if @food.save
      redirect_to @food, notice: "食品が保存されました。"
    else
      redirect_to new_food_url, inertia: { errors: @food.errors }
    end
  end

  # PATCH/PUT /foods/1
  def update
    if @food.update(food_params)
      redirect_to @food, notice: "食品が更新されました。"
    else
      redirect_to edit_food_url(@food), inertia: { errors: @food.errors }
    end
  end

  # DELETE /foods/1
  def destroy
    @food.destroy!
    redirect_to foods_url, notice: "食品が削除されました。"
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_food
      @food = Food.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def food_params
      params.require(:food).permit(
        :name,
        :portion_value,
        :unit_type,
        :kcal,
        :protein,
        :fat,
        :carbs,
        :sugar,
        :fiber,
        :source,
        :jan_code,
        :note
      )
    end

    def serialize_food(food)
      food.as_json()
    end
end
