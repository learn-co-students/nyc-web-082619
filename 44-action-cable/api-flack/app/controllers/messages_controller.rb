class MessagesController < ApplicationController

  def create
    message = Message.new(message_params)

    if message.save

      chatroom = message.channel
      # chatroom you want to communicate
      # the data you want to send

      # communicate to everyone currently in this chatroom
      ChannelChannel.broadcast_to(chatroom, {
        type: "ADD",
        message: MessageSerializer.new(message)
      })

      # communicate to everyone's inddividual notification stream
      chatroom.users.each do |user|
        UsersChannel.broadcast_to(user, {
          message: MessageSerializer.new(message)
        })
      end

      render json: message
    else
      render json: {errors: message.errors.full_messages}
    end
  end

  # def destroy
  #   message = Message.find(params[:id])


  #   ChannelChannel.broadcast_to(chatroom, {
  #     type: "DESTROY"
  #     message: MessageSerializer.new(message)
  #   })
    
  #   message.destroy
  # end

  private

  def message_params
    params.permit(:content, :user_id, :channel_id)
  end
end
