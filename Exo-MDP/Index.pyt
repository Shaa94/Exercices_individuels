from hashlib import sha512

mdp = 'secret'

mdp = mdp.encode()

mdp_sign = sha512(mdp).hexdigest()

print (mdp_sign)

from hashlib import sha512
import getpass


#creation et hashage du mot de passe de reference

mdp = getpass.getpass('mot de passe reference: ')

mdp = mdp.encode()

mdp_sign = sha512(mdp).hexdigest()



#entree et hashage du mdp utilisateur 

user_mdp = getpass.getpass('mot de passe: ')

user_mdp = user_mdp.encode()

user_mdp_sign = sha512(user_mdp).hexdigest()

#comparaison du mdp entré par l'utilisateur au mdp de reference

if user_mdp_sign == mdp_sign:

	print ("ok")