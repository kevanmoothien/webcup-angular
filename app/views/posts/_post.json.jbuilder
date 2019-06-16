json.extract! post, :id, :title, :subtitle, :body, :post_type, :created_at, :updated_at, :image, :caption, :transcript, :alt_text, :created_date
json.url post_url(post, format: :json)
