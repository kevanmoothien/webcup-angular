class Job < ApplicationRecord
  has_one :checklist
  belongs_to :user

  after_create_commit :add_checklist


  private

  def add_checklist
    self.create_checklist!
  end

  def self.detect
    puts "################ #{ENV['CLOUDINARY_URL']}"
    file_name = 'bitbucket.png'
    image_annotator = Google::Cloud::Vision::ImageAnnotator.new
    response = image_annotator.document_text_detection image: file_name
    text = ""
    response.responses.each do |res|
      res.text_annotations.each do |annotation|
        text << annotation.description
      end
    end

    puts text
  end


end
