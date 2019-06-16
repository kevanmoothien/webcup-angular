class CloudinaryUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave

  eager

  version :thumbnail do
    process convert: :jpg
    resize_to_fill(200, 200)
  end

  version :mini do
    process convert: :jpg
    resize_to_fill(100, 100)
  end

  version :large do
    process convert: :jpg
  end
end
