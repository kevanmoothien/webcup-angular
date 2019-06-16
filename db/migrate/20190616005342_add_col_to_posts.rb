class AddColToPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :caption, :string
    add_column :posts, :alt_text, :string
    add_column :posts, :transcript, :text
  end
end
