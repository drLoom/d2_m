class Item < ApplicationRecord
  after_create_commit { broadcast_append_to('items', target: 'items_count', partial: 'items/count', locals: { total: self.class.count }) }
end
