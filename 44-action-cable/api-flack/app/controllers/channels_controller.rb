class ChannelsController < ApplicationController

  def create
    channel = Channel.new(channel_params)

    if channel.save
      render json: channel
    else
      render json: {errors: channel.errors.full_messages}
    end
  end

  def index
    channels = Channel.all

    render json: channels
  end

  private

  def channel_params
    params.permit(:name)
  end
end
