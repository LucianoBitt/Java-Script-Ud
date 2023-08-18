let pessoa = {
    nome: '',
    setNome: function(novoNome) {
        this.nome = novoNome;
    },
    getNome: function() {
        return "O meu nome é " + this.nome + " !";
    },
    setSobreNome: function(sobreNome) {
        this.sobreNome = sobreNome;
    },
    getSobreNome: function(sobreNome) {
        return "Meu sobre nome é " + this.sobreNome + " !";
    }
}

pessoa.setNome("Luciano");
pessoa.setSobreNome("Bittencourt")
console.log(pessoa.getNome());
console.log(pessoa.getSobreNome());