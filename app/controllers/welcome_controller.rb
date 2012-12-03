class WelcomeController < ApplicationController
  def index
  	@motorquote = Motorquote.new()
  end
end
