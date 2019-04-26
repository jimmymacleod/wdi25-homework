class AddRunnerIdToRuns < ActiveRecord::Migration[5.1]
  def change
    add_column :runs, :runner_id, :integer
  end
end
