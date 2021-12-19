# Place in /config/puma/production.rb

rails_env = "production"
environment rails_env

app_dir = "/home/loom/apps/d2_m/current"

bind  "unix://#{app_dir}/puma.sock"
pidfile "/home/loom/apps/d2_m/shared/tmp/pids/puma.pid"
state_path "/home/loom/apps/d2_m/shared/tmp/pids/puma.pid"
directory "#{app_dir}/"

stdout_redirect "#{app_dir}/log/puma.stdout.log", "#{app_dir}/log/puma.stderr.log", true

workers 2
threads 1,2

activate_control_app "unix://#{app_dir}/pumactl.sock"

prune_bundler