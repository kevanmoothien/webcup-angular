class Content < ApplicationRecord
  mount_uploader :cloudinary, CloudinaryUploader

  def self.upload_form
    'https://api.cloudinary.com/v1_1/kevan1881/image/upload?upload_preset=r9yzbndw'
  end

  ###### code here
  #### https://codepen.io/team/Cloudinary/pen/Edxjbj
end
