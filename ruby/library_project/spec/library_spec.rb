require 'spec_helper.rb'

describe 'Library Object' do
  before :all do
    lib_arr = [
      Book.new("JavaScript: The Good Parts", "Douglas Crockford", :development),
      Book.new("Designing with Web Standards", "Jeffery Zeldman", :design),
      Book.new("Dom't Make me Think", "Steve Krug", :usability),
      Book.new("JavaScripot Patterns", "Stoyan Stefanov", :development),
      Book.new("Responsive Web Design", "Ethan Marcotte", :design)
    ]

    File.open "books.yml", "w" do |f|
      f.write YAML::dump lib_arr
    end
  end

  before :each do
    @lib = Library.new "books.yml"
  end

  describe "#new" do
    context "with no parameters" do
      it "has no books" do
        lib = Library.new
        lib.should have(0).books 
      end
    end

    context "with a yaml file name parameter" do
      it "has five books" do
        @lib.should have(5).books
      end
    end
  end

  it "returns all the books in a given category" do
    @lib.get_books_in_category(:development).length.should == 2
  end


end
