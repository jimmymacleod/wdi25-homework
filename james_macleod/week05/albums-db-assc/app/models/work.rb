# == Schema Information
#
# Table name: works
#
#  id         :integer          not null, primary key
#  title      :text
#  year       :text
#  median     :text
#  style      :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Work < ApplicationRecord
end
