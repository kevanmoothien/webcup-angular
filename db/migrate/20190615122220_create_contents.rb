class CreateContents < ActiveRecord::Migration[5.0]
  def change
    create_table :contents do |t|
      t.string :cloudinary
      t.string :filename
      t.jsonb :cloudinary_infos

      t.timestamps
    end
  end
end
