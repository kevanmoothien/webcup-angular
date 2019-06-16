class Post < ApplicationRecord

  def image
    url
  end

  def created_date 
    self.created_at.strftime("%Y-%m-%d")
  end
end
