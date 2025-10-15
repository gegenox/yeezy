import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Star, 
  Menu, 
  X, 
  MessageCircle,
  Instagram,
  Phone,
  Mail,
  Package,
  RefreshCw,
  Truck,
  Shield,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [showOnlyFreeShipping, setShowOnlyFreeShipping] = useState(false);

  const products = [
    {
      id: 1,
      name: "Yeezy Nuvem Original",
      color: "Preto",
      price: 29.39,
      originalPrice: 41.99,
      image: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=500",
      discount: 30,
      freeShipping: true,
      sizes: ['34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44']
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "Qual o Prazo de Entrega?",
      answer: "A Ignite leva o Prazo de Entrega muito a sério! Por isso, tentamos sempre ao máximo, fazer com que nossos clientes recebam suas encomendas em no máximo 4 Dias Úteis!"
    },
    {
      id: 2,
      question: "Como Rastrear meu Pedido?",
      answer: "Ao finalizar a compra conosco, é enviado um E-mail Automático com o Código de Rastreio do Seu Pedido e o Link para Rastrear sua encomenda na nossa Transportadora Própria! Ou Abaixo você pode clicar em Rastreio de Pedido, e Rastrear via CPF da Compra!"
    },
    {
      id: 3,
      question: "Enviam para o Mundo Todo?",
      answer: "Atualmente enviamos apenas para todo o território nacional brasileiro. Estamos trabalhando para expandir nossos serviços internacionalmente em breve!"
    },
    {
      id: 4,
      question: "Qual Fornecedor Oficial?",
      answer: "Gostaríamos de esclarecer que não somos a Ignite Internacional. Somos uma empresa com uma loja física localizada no Paraguai, no Centro de Compras, na Av. Dr. Luis Maria Argaña, Cd Del Este, 100131. Embora nossa loja física ofereça uma ampla variedade de marcas, optamos por focar na Ignite em nossas vendas online, para proporcionar uma experiência mais personalizada e especializada para nossos clientes. Em nossa loja física, você encontrará não apenas produtos da Ignite, mas também diversas outras marcas de qualidade."
    }
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Quero saber mais sobre os chinelos Yeezy Nuvem!', '_blank');
  };

  const scrollToProduct = () => {
    const productSection = document.getElementById('produtos');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              NUVEM STORE
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#produtos" className="text-gray-700 hover:text-blue-600 transition-colors">Produtos</a>
              <a href="#promocoes" className="text-gray-700 hover:text-blue-600 transition-colors">Promoções</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 mt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#produtos" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Produtos</a>
                <a href="#promocoes" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Promoções</a>
                <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contato</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-xl border border-white/20">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-sm font-bold mb-4 shadow-lg">
                🔥 30% DE DESCONTO POR TEMPO LIMITADO!
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              NUVEM STORE
            </h1>
            
            <h2 className="text-2xl md:text-3xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
              O chinelo mais confortável da galáxia chegou!
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-700 font-medium">
              Sinta-se nas nuvens. Todos os dias. 🛸
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={scrollToProduct}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                🛒 COMPRE AGORA COM 30% OFF
              </button>
              <button 
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-8 py-4 rounded-xl font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                💬 FALE CONOSCO
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-600 font-medium">
              <div className="flex items-center gap-2">
                <Truck size={20} />
                <span>Frete grátis para todo o Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={20} />
                <span>Garantia de qualidade</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Phrases */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="text-4xl">🛸</div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Conforto nas alturas</h3>
              <p className="text-gray-700 font-medium">Você nunca mais vai querer tirar do pé!</p>
            </div>
            <div className="space-y-4 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="text-4xl">⚡</div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Ultra confortável. Ultra estiloso.</h3>
              <p className="text-gray-700 font-medium">Pise leve. Pise com estilo.</p>
            </div>
            <div className="space-y-4 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="text-4xl">🌟</div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">O mais desejado da internet</h3>
              <p className="text-gray-700 font-medium">Vire tendência com o chinelo mais cobiçado!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Nossos Produtos
            </h2>
            <p className="text-sm text-gray-500 mb-2 font-medium">Exibindo: 1 - 1 de 1 resultado</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Sidebar Filters */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl">
              {/* Size Filter */}
              <div className="mb-6">
                <h3 className="text-gray-900 font-bold text-lg mb-4 flex items-center justify-between">
                  Tamanho
                  <span className="text-blue-600">📏</span>
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {['33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(selectedSize === size ? '' : size)}
                      className={`p-3 text-sm border-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        selectedSize === size 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-600 shadow-lg' 
                          : 'bg-white text-gray-700 border-gray-300 hover:border-blue-600 hover:shadow-md'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Gender Filter */}
              <div className="mb-6">
                <h3 className="text-gray-900 font-bold text-lg mb-4 flex items-center justify-between">
                  Gênero
                  <span className="text-purple-600">👥</span>
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition-colors">
                    <input type="checkbox" className="rounded-lg w-5 h-5 text-blue-600 border-2 border-gray-300 focus:ring-blue-500" />
                    Masculino
                  </label>
                  <label className="flex items-center gap-3 text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition-colors">
                    <input type="checkbox" className="rounded-lg w-5 h-5 text-blue-600 border-2 border-gray-300 focus:ring-blue-500" />
                    Feminino
                  </label>
                </div>
              </div>

              {/* Color Filter */}
              <div className="mb-6">
                <h3 className="text-gray-900 font-bold text-lg mb-4 flex items-center justify-between">
                  Cor Principal
                  <span className="text-pink-600">🎨</span>
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition-colors">
                    <input type="checkbox" className="rounded-lg w-5 h-5 text-blue-600 border-2 border-gray-300 focus:ring-blue-500" />
                    Bege
                  </label>
                  <label className="flex items-center gap-3 text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition-colors">
                    <input type="checkbox" className="rounded-lg w-5 h-5 text-blue-600 border-2 border-gray-300 focus:ring-blue-500" />
                    Preto
                  </label>
                </div>
              </div>
            </div>

            {/* Product */}
            <div className="flex justify-center lg:justify-start">
                {products.map((product) => (
                  <div key={product.id} className="w-full max-w-sm bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-white/20">
                    <div className="relative overflow-hidden">
                      <button className="absolute top-4 right-4 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                        <svg className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        -{product.discount}% OFF
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-purple-600 cursor-pointer transition-all duration-300">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-sm text-gray-500 line-through font-medium">R$ {product.originalPrice.toFixed(2)}</span>
                          <div className="text-2xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            R$ {product.price.toFixed(2)} <span className="text-sm font-semibold text-gray-600">no Pix</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        🛒 Comprar Agora
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            </div>
          </div>

          <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">Especificações do Produto</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="font-medium">Super leve e resistente</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="font-medium">Palmilha anatômica que se molda ao pé</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="font-medium">Solado grosso com absorção de impacto</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="font-medium">Design moderno e minimalista</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="font-medium">Disponível em várias cores</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-6">📦</div>
                <p className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent mb-3">Tamanhos do 34 ao 44</p>
                <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">🚀 Envio rápido + código de rastreio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section id="promocoes" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              🎁 O presente perfeito para seus pés!
            </h2>
            <p className="text-xl mb-6 text-gray-600">
              Aproveite nossa mega promoção e garante já o seu par de chinelos Yeezy Nuvem com desconto imperdível!
            </p>
            <div className="bg-white rounded-2xl p-6 border-2 border-blue-600 shadow-sm">
              <p className="text-2xl font-bold text-blue-600 mb-2">⏰ OFERTA POR TEMPO LIMITADO</p>
              <p className="text-gray-700">Restam apenas algumas unidades em estoque!</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.id} className="mb-4">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 bg-gray-50 border border-gray-200 hover:border-blue-600 transition-all duration-300 text-left rounded-t-lg"
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  {openFaq === faq.id ? (
                    <ChevronUp className="text-blue-600 flex-shrink-0 ml-4" size={24} />
                  ) : (
                    <ChevronDown className="text-blue-600 flex-shrink-0 ml-4" size={24} />
                  )}
                </button>
                
                {openFaq === faq.id && (
                  <div className="bg-white border-l border-r border-b border-gray-200 p-6 rounded-b-lg">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                NUVEM STORE
              </h3>
              <p className="text-gray-300 mb-4">O conforto começa aqui.</p>
              <p className="text-gray-400">
                Especializada em chinelos estilo Yeezy Nuvem, oferecemos produtos de alta qualidade com o máximo conforto para seus pés.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">SOBRE</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Termos e Condições</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Política de reembolso</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Rastreio do Pedido</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">CENTRAL DE ATENDIMENTO</h4>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center gap-2">
                  <span className="text-blue-400">🕒</span>
                  Atendimento: seg. à sáb. 10 às 19h
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-blue-400" />
                  Email: suporte@nuvemstore.com.br
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">FORMAS DE PAGAMENTO</h4>
              <div className="grid grid-cols-4 gap-2 mb-6">
                <div className="bg-white rounded p-1 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">VISA</span>
                </div>
                <div className="bg-white rounded p-1 flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-xs">MC</span>
                </div>
                <div className="bg-white rounded p-1 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-xs">ELO</span>
                </div>
                <div className="bg-white rounded p-1 flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-xs">PIX</span>
                </div>
              </div>
              
              <h5 className="text-sm font-bold text-white mb-3">LOJA VERIFICADA</h5>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-green-500" />
                  <span className="text-xs text-gray-400">Site Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-xs text-gray-400">Reclame Aqui</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">🔒</span>
                  <span className="text-xs text-gray-400">SSL Seguro</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2022 NUVEM STORE. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">Sinta-se nas nuvens todos os dias! 🛸</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}

export default App;