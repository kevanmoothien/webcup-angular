ActiveAdmin.register Post do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

  permit_params :title, :subtitle, :body, :post_type, :url, :caption, :alt_text, :transcript

  form title: 'New post' do |f|
    inputs 'Details' do
      input :title
      input :subtitle
      input :body, as: :quill_editor
      input :caption
      input :post_type, as: :select, collection: ['image', 'video', 'audio', 'normal']
      render partial: 'uploader'
      input :alt_text
      input :transcript, as: :quill_editor
    end

    f.actions
  end
end