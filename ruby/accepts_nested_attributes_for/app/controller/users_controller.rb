class UsersController < ApplicationController
  def new
    @user = User.new
    @user.addresses.build

    # デフォルトで2つの住所入力欄を作成したい場合は次のようにする
    # 2.times { @user.addresses.build }
  end

  private

  def user_params
    params.require(:user).permit(
        :username,
        :age,
        addresses_attributes: [:id, :zipcode, :city, :street, :tel, :_destroy]
    )
  end
end