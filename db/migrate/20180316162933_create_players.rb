class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.string :name
      t.numeric :age
      t.numeric :speed
      t.numeric :weight
      t.numeric :pass
      t.numeric :shoot
      t.numeric :dribble
      t.numeric :defense
      t.numeric :keeper
      t.string :photo
      t.string :team
      t.string :company

      t.timestamps
    end
  end
end
