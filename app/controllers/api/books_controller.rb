class Api::BooksController < ApplicationController
  protect_from_forgery :except => [:create, :update, :destroy]

  def create
    @book = Book.new(book_params)
    if @book.save
      head :no_content
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end
  
  def update
    @book = Book.find_by(id: params[:id])
    @books = Book.all
    if @book.update(book_params)
      render json: @books
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def show
    @book = Book.find_by(id: params[:id])
    render json: @book
  end

  def index
    @books = Book.all
    render json: @books
  end

  def destroy
    @book = Book.find_by(id: params[:id])
    @books = Book.all
    if @book.destroy
      render json: @books
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end


  private

  def book_params
    params.fetch(:book, {}).permit(
      :title, :author, :publisher, :genre
    )
  end


end
