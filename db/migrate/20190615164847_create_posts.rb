class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :subtitle
      t.text :body
      t.string :post_type

      t.timestamps
    end
  end
end
