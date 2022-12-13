function abbrevName(name){
    let nameInitials = name.split(' ')
    return nameInitials.map(x => x[0].toUpperCase()).join('.')
  }