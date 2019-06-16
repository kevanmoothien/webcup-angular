class Post < ApplicationRecord

  def image
    url
  end

  def created_date 
    (self.created_at + 5.years ).strftime("%Y-%m-%d")
  end
end
