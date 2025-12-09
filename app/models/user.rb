class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
        :rememberable, :validatable
  has_many :meal_logs, dependent: :destroy
  has_many :foods, through: :meal_logs

  validates :email,
    length: { maximum: 255 }

  validates :password,
    length: { minimum: 8 },
    format: { with: /\A(?=.*[a-zA-Z])(?=.*\d).+\z/ },
    if: :password_required?

  validates :name,
    length: { maximum: 50 }

  private
  def password_required?
    new_record? || password.present?
  end
end
