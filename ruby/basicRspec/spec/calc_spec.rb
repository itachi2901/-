require 'calc'

RSpec.describe "A calc" do
  before  do
    @calc = Calc.new
  end

  it "given 2 and 3, returns 5" do
    expect(@calc.add(2, 3)).to eq(5)
  end

  # 三角測量
  it "given 5 and 13, returns 18" do
    expect(@calc.add(5, 13)).to eq(18)
  end
end

# describe､contextを使おう
RSpec.describe Calc do
  context "when normal mode" do
    it "draws graph" do
      calc = Calc.new
      expect(calc.add(2, 3)).to eq(5)
    end
  end

  context "when normal mode" do
    it "draws graph" do
    end
  end
end

# exampleを使ってみよう
RSpec.describe Calc do
  # example / specify
  it {
    calc = Calc.new
    expect(calc.add(2, 3)).to eq(5)
  }

  it "draws graph" # pending
end

# matcherを使ってみよう
RSpec.describe Calc do
  it {
    calc = Calc.new
    # 参考リンク: https://rubydoc.info/gems/rspec-expectations/frames
    expect(calc.add(2, 3)).to eq(5) # matcher
    expect(calc.add(2, 3)).not_to eq(5)
    expect(calc.add(2, 3)).to be true
    expect(calc.add(2, 3)).to be false

  }
end

# subjectを使ってみよう
RSpec.describe Calc do
  it {
    subject(:calc) {Calc.new}
    expect(calc.add(2, 3)).to eq(5) # matcher

  }
end


# letを使ってみよう
RSpec.describe Calc do
  subject(:calc) {Calc.new}

  # let
  context "tax 5%" do
    let (:tax) { 0.05 }
    it {expect(calc.price(100, tax)).to eq(105)}
  end

  context "tax 8%" do
    let (:tax) { 0.08 }
    it {expect(calc.price(100, tax)).to eq(108)}
  end
end

# letとlet!を使い分けよう

RSpec.describe Calc do
  subject(:calc) {Calc.new}

  # let
  let!(:tax) {
    calc.tax = 0.05
  }
  it {expect(tax).to eq(0.05)}
  it {expect(calc.price(100)).to eq(105)}
end

# method stubを使おう
RSpec.describe Calc do
  it do
    user = double('user')
    allow(user).to receive(:name).and_return('itachi')
    calc = Calc.new
    expect(calc.add_with_name(5, 4, user.name)).to eq('9 by itachi')
  end
end

# shared_examplesを使おう
RSpec.shared_examples "basic functions" do
  it "can add"
  it "can edit"
  it "can delete"
end

RSpec.describe Calc do
  context "normal mode" do
    include_examples "basic functions"
  end

  context "expert mode" do
    include_examples "basic functions"
  end
end
